import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAnchorLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_anchor_links';
  info: {
    displayName: 'anchor-link';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_heading_blocks';
  info: {
    displayName: 'heading-block';
  };
  attributes: {
    level: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_blocks';
  info: {
    displayName: 'image-block';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalDomain: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.String;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    displayName: 'text-block';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.anchor-link': SharedAnchorLink;
      'shared.heading-block': SharedHeadingBlock;
      'shared.image-block': SharedImageBlock;
      'shared.seo': SharedSeo;
      'shared.text-block': SharedTextBlock;
    }
  }
}
