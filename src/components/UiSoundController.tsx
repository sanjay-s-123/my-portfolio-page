import React, { useEffect } from 'react';
import { petAudio } from '../utils/petAudio';

export const UiSoundController: React.FC = () => {
  useEffect(() => {
    let lastActiveSection = 'home';

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Skip if inside Byte AI pet container (Byte has its own custom voice/beeps)
      if (target.closest('[data-pet-container="true"]')) {
        return;
      }

      // Skip if clicking the SFX toggle button itself (it plays its own confirmation sound)
      if (target.closest('[data-sfx-toggle="true"]')) {
        return;
      }

      const interactive = target.closest('button, a, [role="button"], input[type="submit"], .cursor-pointer');
      if (interactive) {
        if (interactive.tagName === 'A' || interactive.getAttribute('role') === 'tab') {
          petAudio.playUiSwitch();
        } else {
          petAudio.playUiClick();
        }
      }
    };

    const handleGlobalScroll = () => {
      // Subtle throttled scroll tick
      petAudio.playScrollTick();

      // Detect entering a new section for a slightly distinct section chime
      const sections = ['home', 'about', 'skills', 'projects', 'milestones', 'leadership', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            if (lastActiveSection !== section) {
              lastActiveSection = section;
              petAudio.playSectionEnter();
            }
            break;
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    window.addEventListener('scroll', handleGlobalScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      window.removeEventListener('scroll', handleGlobalScroll);
    };
  }, []);

  return null;
};
