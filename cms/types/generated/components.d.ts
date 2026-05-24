import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDynamicSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_dynamic_sections';
  info: {
    displayName: 'Dynamic Section';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    callToAction: Schema.Attribute.Component<'elements.actions', false>;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    socials: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'videos'>;
    callToAction: Schema.Attribute.Component<'elements.actions', false>;
    heading: Schema.Attribute.String;
    specializations: Schema.Attribute.Component<'elements.collection', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksSkills extends Struct.ComponentSchema {
  collectionName: 'components_blocks_skills';
  info: {
    displayName: 'Skills';
  };
  attributes: {
    skills: Schema.Attribute.Component<'elements.category', true>;
    tabs: Schema.Attribute.Component<'elements.category', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsActions extends Struct.ComponentSchema {
  collectionName: 'components_elements_actions';
  info: {
    displayName: 'Actions';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface ElementsCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    iconKey: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['frontend', 'backend', 'others']>;
  };
}

export interface ElementsCollection extends Struct.ComponentSchema {
  collectionName: 'components_elements_collections';
  info: {
    displayName: 'Collection';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.dynamic-section': BlocksDynamicSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.skills': BlocksSkills;
      'elements.actions': ElementsActions;
      'elements.category': ElementsCategory;
      'elements.collection': ElementsCollection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
