(function () {
  const root = document.querySelector(".quiet-hour");
  const progress = document.getElementById("quiet-hour-progress");
  const hero = document.querySelector("[data-hero]");
  const stickyCta = document.querySelector("[data-sticky-cta]");

  function updateProgress() {
    if (!progress) return;
    const page = document.documentElement;
    const max = page.scrollHeight - page.clientHeight;
    const pct = max > 0 ? (page.scrollTop / max) * 100 : 0;
    progress.style.width = pct + "%";
  }

  function setStickyVisible(isVisible) {
    if (!stickyCta || !root) return;
    stickyCta.classList.toggle("visible", isVisible);
    root.classList.toggle("has-sticky", isVisible);
  }

  function setupStickyCta() {
    if (!hero || !stickyCta) return;
    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      setStickyVisible(rect.bottom <= 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  const fmt = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return minutes + ":" + secs;
  };

  const playIcon =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5l12 7-12 7z"></path></svg>';
  const pauseIcon =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"></path></svg>';

  function pushAudioEvent(slug, action) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "audio_" + slug, action });
  }

  function setupAudioPlayer(player) {
    const audio = player.querySelector("audio");
    const playButtons = document.querySelectorAll("[data-audio-play]");
    const scrubs = document.querySelectorAll("[data-audio-scrub]");
    const times = document.querySelectorAll("[data-audio-time]");
    const speedButton = player.querySelector("[data-audio-speed]");
    const sticky = document.querySelector("[data-audio-sticky]");
    const inline = player;
    const speeds = [1, 1.25, 1.5];
    const milestones = new Set();
    let speedIndex = 0;
    let hasStarted = false;

    if (!audio) return;

    function updatePlayButtons() {
      playButtons.forEach((button) => {
        button.innerHTML = audio.paused ? playIcon : pauseIcon;
        button.setAttribute("aria-label", audio.paused ? "Play narration" : "Pause narration");
      });
    }

    function updateTime() {
      const duration = audio.duration || 0;
      scrubs.forEach((scrub) => {
        scrub.max = duration;
        scrub.value = audio.currentTime || 0;
      });
      times.forEach((time) => {
        time.textContent = fmt(audio.currentTime || 0) + " / " + fmt(duration);
      });

      if (duration > 0) {
        const pct = (audio.currentTime / duration) * 100;
        [25, 50, 75].forEach((milestone) => {
          const key = "progress_" + milestone;
          if (pct >= milestone && !milestones.has(key)) {
            milestones.add(key);
            pushAudioEvent(player.dataset.trackingSlug || "quiet_hour", key);
          }
        });
      }
    }

    function updateStickyAudio() {
      if (!sticky || !hasStarted) return;
      const rect = inline.getBoundingClientRect();
      sticky.classList.toggle("visible", rect.bottom < 40);
    }

    playButtons.forEach((button) => {
      button.innerHTML = playIcon;
      button.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });
    });

    scrubs.forEach((scrub) => {
      scrub.addEventListener("input", (event) => {
        audio.currentTime = Number(event.target.value);
        updateTime();
      });
    });

    if (speedButton) {
      speedButton.addEventListener("click", () => {
        speedIndex = (speedIndex + 1) % speeds.length;
        audio.playbackRate = speeds[speedIndex];
        speedButton.textContent = speeds[speedIndex] + "x";
        speedButton.setAttribute("aria-label", "Playback speed " + speeds[speedIndex] + "x");
      });
    }

    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("play", () => {
      hasStarted = true;
      if (!milestones.has("play")) {
        milestones.add("play");
        pushAudioEvent(player.dataset.trackingSlug || "quiet_hour", "play");
      }
      updatePlayButtons();
      updateStickyAudio();
    });
    audio.addEventListener("pause", () => {
      pushAudioEvent(player.dataset.trackingSlug || "quiet_hour", "pause");
      updatePlayButtons();
    });
    audio.addEventListener("ended", () => {
      if (!milestones.has("complete")) {
        milestones.add("complete");
        pushAudioEvent(player.dataset.trackingSlug || "quiet_hour", "complete");
      }
      updatePlayButtons();
    });

    window.addEventListener("scroll", updateStickyAudio, { passive: true });
    updatePlayButtons();
    updateTime();
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
  setupStickyCta();
  document.querySelectorAll("[data-audio-player]").forEach(setupAudioPlayer);
})();
