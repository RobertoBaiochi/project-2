export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  /*
      {
        "__component": "section.section-two-columns",
        "title": "January brings us Firefox 85",
        "description": "To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox.",
        "metadata": {
          "background": true,
          "section_id": "home",
        },
        "image": {
          "url": "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg",
      },
   */
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
