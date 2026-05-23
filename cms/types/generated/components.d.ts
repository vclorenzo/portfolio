import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksDynamicSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_dynamic_sections';
  info: {
    displayName: 'Dynamic Section';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'elements.actions', false>;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'videos'>;
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
    callToAction: Schema.Attribute.Component<'elements.actions', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    specializations: Schema.Attribute.Component<'elements.collection', true>;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksShowcase extends Struct.ComponentSchema {
  collectionName: 'components_blocks_showcases';
  info: {
    displayName: 'Showcase';
  };
  attributes: {
    category: Schema.Attribute.Component<'elements.collection', true>;
    skills: Schema.Attribute.Component<'elements.category', true>;
  };
}

export interface ElementsActions extends Struct.ComponentSchema {
  collectionName: 'components_elements_actions';
  info: {
    displayName: 'Actions';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    theme: Schema.Attribute.Enumeration<['light', 'dark']>;
  };
}

export interface ElementsCategory extends Struct.ComponentSchema {
  collectionName: 'components_elements_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    name: Schema.Attribute.String;
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
      'blocks.showcase': BlocksShowcase;
      'elements.actions': ElementsActions;
      'elements.category': ElementsCategory;
      'elements.collection': ElementsCollection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
