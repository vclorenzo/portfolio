import type { Schema, Struct } from '@strapi/strapi';

export interface CollectionsChips extends Struct.ComponentSchema {
  collectionName: 'components_collections_chips';
  info: {
    displayName: 'Chips';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface CollectionsCollections extends Struct.ComponentSchema {
  collectionName: 'components_collections_collections';
  info: {
    displayName: 'Category';
  };
  attributes: {
    Name: Schema.Attribute.String;
  };
}

export interface IconIcon extends Struct.ComponentSchema {
  collectionName: 'components_icon_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    Category: Schema.Attribute.Enumeration<['frontend', 'backend', 'others']>;
    IconName: Schema.Attribute.String;
  };
}

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    AnchorTag: Schema.Attribute.String;
    LinkText: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface PageComponentsDynamicSection extends Struct.ComponentSchema {
  collectionName: 'components_page_components_dynamic_sections';
  info: {
    displayName: 'DynamicSection';
    icon: 'stack';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    LottieFile: Schema.Attribute.JSON;
    SectionContent: Schema.Attribute.Text;
    Socials: Schema.Attribute.Component<'links.links', true>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    Visible: Schema.Attribute.Boolean;
  };
}

export interface PageComponentsShowcase extends Struct.ComponentSchema {
  collectionName: 'components_page_components_showcases';
  info: {
    displayName: 'Showcase';
    icon: 'book';
  };
  attributes: {
    Chips: Schema.Attribute.Component<'collections.chips', true>;
    FeatureLink: Schema.Attribute.String;
    FeatureSubtitle: Schema.Attribute.String;
    FeatureTitle: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface PageComponentsTabs extends Struct.ComponentSchema {
  collectionName: 'components_page_components_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    Category: Schema.Attribute.Component<'collections.collections', true>;
    Skills: Schema.Attribute.Component<'icon.icon', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'collections.chips': CollectionsChips;
      'collections.collections': CollectionsCollections;
      'icon.icon': IconIcon;
      'links.links': LinksLinks;
      'page-components.dynamic-section': PageComponentsDynamicSection;
      'page-components.showcase': PageComponentsShowcase;
      'page-components.tabs': PageComponentsTabs;
    }
  }
}
