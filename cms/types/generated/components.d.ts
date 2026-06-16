import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    projects: Schema.Attribute.Component<'elements.image-rich-text', true>;
  };
}

export interface BlocksContactForm extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    formFields: Schema.Attribute.Component<'elements.fields', true>;
    greeting: Schema.Attribute.String;
    lottieFile: Schema.Attribute.JSON;
    message: Schema.Attribute.String;
  };
}

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
    lottieFile: Schema.Attribute.JSON;
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

export interface BlocksResumeViewer extends Struct.ComponentSchema {
  collectionName: 'components_blocks_resume_viewers';
  info: {
    displayName: 'Resume Viewer';
  };
  attributes: {
    pdf: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksShowcase extends Struct.ComponentSchema {
  collectionName: 'components_blocks_showcases';
  info: {
    displayName: 'Showcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageURL: Schema.Attribute.Component<'elements.link', true>;
    name: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'elements.collection', true>;
    title: Schema.Attribute.String;
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

export interface ElementsFields extends Struct.ComponentSchema {
  collectionName: 'components_elements_fields';
  info: {
    displayName: 'Fields';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ElementsImageRichText extends Struct.ComponentSchema {
  collectionName: 'components_elements_image_rich_texts';
  info: {
    displayName: 'ImageRichText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_elements_key_values';
  info: {
    displayName: 'KeyValue';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
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
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    socials: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'elements.actions', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.article': BlocksArticle;
      'blocks.contact-form': BlocksContactForm;
      'blocks.dynamic-section': BlocksDynamicSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.resume-viewer': BlocksResumeViewer;
      'blocks.showcase': BlocksShowcase;
      'blocks.skills': BlocksSkills;
      'elements.actions': ElementsActions;
      'elements.category': ElementsCategory;
      'elements.collection': ElementsCollection;
      'elements.fields': ElementsFields;
      'elements.image-rich-text': ElementsImageRichText;
      'elements.key-value': ElementsKeyValue;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
