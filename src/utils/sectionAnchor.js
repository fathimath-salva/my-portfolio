export function getSectionScrollTarget(section) {
  if (!section) return null;
  return section.querySelector('.section-heading') || section;
}

export function syncNavbarSpacer() {
  const navbar = document.querySelector('.navbar');
  const spacer = document.querySelector('.navbar__spacer');
  if (navbar && spacer) {
    spacer.style.height = `${navbar.getBoundingClientRect().height}px`;
  }
}

export function scrollToSectionTarget(target, behavior = 'smooth') {
  if (!target) return;
  syncNavbarSpacer();
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar?.getBoundingClientRect().height || 0;
  // Framer Motion temporarily translates section headings while they enter
  // view. offsetTop walks layout coordinates and stays stable during that animation.
  let targetTop = 0;
  let element = target;
  while (element) {
    targetTop += element.offsetTop;
    element = element.offsetParent;
  }
  // Leave a small, consistent gap below the fixed navbar so the section
  // heading is fully visible and doesn't feel tucked under the bar.
  const headingGap = 16;
  window.scrollTo({ top: Math.max(0, targetTop - navbarHeight - headingGap), left: 0, behavior });
}
