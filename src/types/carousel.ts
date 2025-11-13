export interface CarouselSlide {
    id: string;
    title: string;
    description: string;
    image: string;
    backgroundColor?: string;
  }
  
  export type AnimationEffect =
    | "slide"
    | "fade"
    | "scale"
    | "flip"
    | "cube"
    | "carousel3d"
    | "zoom"
    | "rotate";
  
  export interface CarouselProps {
    slides: CarouselSlide[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showIndicators?: boolean;
    showNavigation?: boolean;
    className?: string;
    animationEffect?: AnimationEffect;
  }
  
  export interface UseCarouselOptions {
    slideCount: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
  }
  
  export interface CarouselState {
    currentSlide: number;
    isPlaying: boolean;
    direction: "forward" | "backward";
  }
  
  /////////////////////////////
  // ✅ Types FacebookComponentImage
  /////////////////////////////
  
  export type ISODateString = string;
  
  export interface PageImage {
    id: number;
    url: string;
    alt: string;
    width: number;
    height: number;
  }
  
  export interface ParagraphListItem {
    id: number;
    text: string;
    order: number;
    paragraphListId: number;
  }
  
  export interface ParagraphList {
    id: number;
    items: ParagraphListItem[];
  }
  
  // Base for both page blocks
  export interface BasePageContent {
    id: number;
    slug: string;
    heading: string;
    imageId: number;
    paragraphListId: number;
    createdAt: ISODateString;
    updatedAt: ISODateString;
    image: PageImage;
    paragraphList: ParagraphList;
  }
  
  // pageContent1 has an extra "paragraph"
  export interface PageContent1 extends BasePageContent {
    paragraph: string;
  }
  
  export interface FacebookApiResponse {
    data: FacebookData;
  }
  
  export type PageContent3Card1 = {
    id: number;
    pageContent3Id: number;
    heading: string;
  
    paragraphListId: number;
    paragraphList: ParagraphList;
  
    imageId: number;
    image: PageImage;
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  };
  
  export type PageContent3Card2 = {
    id: number;
    pageContent3Id: number;
    heading: string;
  
    paragraphListId: number;
    paragraphList: ParagraphList;
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  };
  
  // --- Root PageContent3 ---
  export type PageContent3 = {
    id: number;
    slug: string;
  
    card1: PageContent3Card1;
    card2: PageContent3Card2;
  };
  
  export interface FacebookData {
    pageContent1: PageContent1;
    pageContent3: PageContent3;
  }
  
  export interface PageImage {
    id: number;
    url: string;
    alt: string;
    width: number;
    height: number;
  }
  
  export interface ParagraphListItem {
    id: number;
    text: string;
    order: number;
    paragraphListId: number;
  }
  
  export interface ParagraphList {
    id: number;
    items: ParagraphListItem[];
  }
  
  export interface PageContent2 {
    id: number;
    slug: string;
    heading: string;
  
    imageId: number;
    image: PageImage;
  
    paragraphListId: number;
    paragraphList: ParagraphList;
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  
  export interface WhatsappItem {
    id: number;
    whatsappPageId: number;
    heading: string;
    paragraph: string;
    imageId: number;
    image: PageImage;
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  
  export interface WhatsappPage {
    id: number;
    slug: string;
    heading: string;
    items: WhatsappItem[];
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  export interface ContactPage {
    id: number;
    slug: string;
    heading: string;
  
    imageId: number;
    image: PageImage;
  
    paragraphListId: number;
    paragraphList: ParagraphList;
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  
  export interface LiveLocationPage {
    id: number;
    slug: string;
    heading: string;
  
    getStart: string;
    liveDemo: string;
  
    paragraphListId: number;
    paragraphList: ParagraphList;
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  
  export interface AllFeatureItem {
    id: number;
    allFeaturePageId: number;
    heading: string;
  
    paragraphListId: number;
    paragraphList: ParagraphList;
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  
  export interface AllFeaturePage {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
  
    items: AllFeatureItem[];
  
    createdAt: ISODateString;
    updatedAt: ISODateString;
  }
  
  export interface CallRecordingPage {
    pageContent1: PageContent1;
    pageContent2: PageContent2;
    pageContent3: PageContent3;
  }
  export interface SmsPage {
    pageContent1: PageContent1;
    pageContent2: PageContent2;
    pageContent3: PageContent3;
  }
  export interface WhatsappPagePayload {
    pageContent1: PageContent1;
    pageContent2: PageContent2;
    whatsappPage: WhatsappPage;
    pageContent3: PageContent3;
  }
  export interface ContactsPagePayload {
    pageContent1: PageContent1;
    contactPage: ContactPage;
    pageContent3: PageContent3;
  }
  export interface LiveLocationPagePayload {
    pageContent1: PageContent1;
    pageContent3: PageContent3;
    liveLocationPage: LiveLocationPage;
  }
  export interface AllFeaturesPagePayload {
    pageContent1: PageContent1;
    allFeaturePage: AllFeaturePage;
  }
  
  export interface ParagraphListItem {
    id: number;
    text: string;
    order: number;
    paragraphListId: number;
  }
  
  /* ===== Feature Icon Block ===== */
  export interface FeatureIconBlock {
    id: number;
    heading: string;
    paragraph: string;
    iconName: string;
    color: string;
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 1 ===== */
  export interface HomePageComponent1 {
    id: number;
    slug: string;
    heading1: string;
    heading2: string;
    paragraph1: string;
    paragraph2: string;
    getStart: string;
    liveDemo: string;
    heading3: string;
    heading4: string;
    paragraph3: string;
    imageId: number;
    image: PageImage;
    features: FeatureIconBlock[];
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 2 ===== */
  export interface HomePageComponent2 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    note: string;
    imageId: number;
    image: PageImage;
    features: FeatureIconBlock[];
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 3 ===== */
  export interface FeatureImageBlock {
    id: number;
    heading: string;
    paragraph: string;
    image: PageImage;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface HomePageComponent3 {
    id: number;
    slug: string;
    heading: string;
    tryNow: string;
    featureImageBlocks: FeatureImageBlock[];
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 4 ===== */
  export interface HomePageComponent4Item {
    id: number;
    heading: string;
    paragraph: string;
    order: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface HomePageComponent4 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    moreQuestion: string;
    image: PageImage;
    imageId: number;
    items: HomePageComponent4Item[];
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 5 ===== */
  export interface HomePageComponent5Item {
    id: number;
    paragraph: string;
    image: PageImage;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface HomePageComponent5 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    viewDemo: string;
    items: HomePageComponent5Item[];
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 6 ===== */
  export interface HomePageComponent6 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    featureImageBlocks: FeatureImageBlock[];
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 7 ===== */
  export interface HomePageComponent7 {
    id: number;
    slug: string;
    heading1: string;
    companyName: string;
    heading2: string;
    paragraph: string;
    boxHeading1: string;
    reviewsCount: number;
    BasedOnCount: number;
    reating: number;
    trynow: string;
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Component 8 ===== */
  export interface HomepageHeadings8Card1 {
    id: number;
    heading: string;
    image: PageImage;
    imageId: number;
    component8Id: number;
    paragraphListId: number;
    getStart: string;
    liveDemo: string;
    paragraphList: {
      id: number;
      items: ParagraphListItem[];
    };
    createdAt: string;
    updatedAt: string;
  }
  
  export interface HomepageHeadings8Card2 {
    id: number;
    heading: string;
    image: PageImage;
    component8Id: number;
    imageId: number;
    items: HomePageComponent4Item[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface HomePageComponent8 {
    id: number;
    slug: string;
    card1: HomepageHeadings8Card1;
    card2: HomepageHeadings8Card2;
    createdAt: string;
    updatedAt: string;
  }
  
  /* ===== Combined HomePage ===== */
  export interface HomePage {
    component1: HomePageComponent1;
    component2: HomePageComponent2;
    component3: HomePageComponent3;
    component4: HomePageComponent4;
    component5: HomePageComponent5;
    component6: HomePageComponent6;
    component7: HomePageComponent7;
    component8: HomePageComponent8;
  }
  
  // You can use a single list item type for both list1 and list2
  export interface WhyUsComponent4ListItem {
    id: number;
    component4Id: number; // FK to WhyUsComponent4.id
    heading: string;
    paragraph: string;
    order: number;
    imageId: number;
    image: PageImage;
    createdAt: string;
    updatedAt: string;
  }
  
  // ---------- Component 4 (DB/response shape) ----------
  export interface WhyUsComponent4 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    createdAt: string;
    updatedAt: string;
    // Two independent lists:
    list1: WhyUsComponent4ListItem[];
    list2: WhyUsComponent4ListItem[];
  }
  
  // ---------- Component 1 ----------
  export interface WhyUsComponent1 {
    id: number;
    slug: string;
    heading1: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    imageId: number;
    image: PageImage;
    listItems: { id: number; text: string }[];
    createdAt: string;
    updatedAt: string;
  }
  
  // ---------- Component 2 ----------
  export interface WhyUsComponent2 {
    id: number;
    slug: string;
    heading: string;
    imageId: number;
    image: PageImage;
    experience: number;
    happyUsers: number;
    listItems: { id: number; text: string }[];
    createdAt: string;
    updatedAt: string;
  }
  
  // ---------- Component 3 ----------
  export interface WhyUsComponent3 {
    id: number;
    slug: string;
    heading: string;
    heading2: string;
    paragraph: string;
    listItems: { id: number; text: string }[];
    createdAt: string;
    updatedAt: string;
  }
  
  // ---------- Component 4 ----------
  export interface WhyUsComponent4ListItem {
    id: number;
    heading: string;
    paragraph: string;
    order: number;
    imageId: number;
    image: PageImage;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface WhyUsComponent4 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    list1: WhyUsComponent4ListItem[];
    list2: WhyUsComponent4ListItem[];
    createdAt: string;
    updatedAt: string;
  }
  
  // ---------- Component 5 ----------
  export interface WhyUsComponent5 {
    id: number;
    slug: string;
    heading: string;
    paragraph: string;
    createdAt: string;
    updatedAt: string;
  }
  
  // ---------- Full WhyUs Page ----------
  export interface WhyUsPage {
    component1: WhyUsComponent1;
    component2: WhyUsComponent2;
    component3: WhyUsComponent3;
    component4: WhyUsComponent4;
    component5: WhyUsComponent5;
  }
  
  export interface SEOConfig {
    // Basic meta
    seoTitle: string;
    metaDescription: string;
    metaKeywords: string; // comma-separated list
  
    // Canonical & robots
    canonicalUrl: string;
    robots: string; // e.g. "index, follow" | "noindex, nofollow"
  
    // OpenGraph
    ogTitle: string;
    ogDescription: string;
    ogType: OpenGraphType;
    ogImageurl: string;
    ogImageAlt: string;
    ogImageWidth: number;
    ogImageHight: number;
  
    // Twitter
    twitterTitle: string;
    twitterDescription: string;
    twitterCard: TwitterCardType;
    twitterImageUrl: string;
    twitterImageAlt: string;
  }
  
  export type OpenGraphType =
    | "website"
    | "article"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";
  
  export type TwitterCardType = "summary" | "summary_large_image";
  
  export interface MediaSize {
    sourceUrl: string;
    width: number;
    height: number;
  }
  
  export interface MediaDetails {
    file: string;
    sizes: MediaSize[];
  }
  
  export interface FeaturedImageNode {
    mediaDetails: MediaDetails;
  }
  
  export interface FeaturedImage {
    cursor?: string; // not standard WP field, but you had it in your query
    node: FeaturedImageNode;
  }
  
  export interface CategoryNode {
    name: string;
    slug: string;
  }
  
  export interface Categories {
    nodes: CategoryNode[];
  }
  
  export interface PostNode {
    date: string;
    slug: string;
    title: string;
    featuredImage: FeaturedImage;
    categories: Categories;
  }
  
  export interface PageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
  }
  
  export interface PostsResponse {
    nodes: PostNode[];
    pageInfo: PageInfo;
  }
  
  export interface SinglePostResponse {
    postBy: {
      content: string;
      date: string;
      slug: string;
      title: string;
      featuredImage: {
        node: {
          mediaDetails: {
            file: string;
            sizes: {
              sourceUrl: string;
              width: number;
              height: number;
            }[];
          };
        } | null;
      } | null;
  
      seo: SEOData;
    } | null;
  
    posts: {
      nodes: {
        title: string;
        slug: string;
        date: string;
        featuredImage: {
          node: {
            mediaDetails: {
              file: string;
              sizes: {
                sourceUrl: string;
                width: number;
                height: number;
              }[];
            };
            date: string;
          } | null;
        } | null;
      }[];
    };
  }
  
  export interface SEOData {
    canonical: string;
    metaDesc: string;
    metaKeywords: string;
    opengraphDescription: string;
    opengraphImage: SEOOpenGraphImage;
    opengraphTitle: string;
    opengraphType: OpenGraphType;
    title: string;
    twitterDescription: string;
    twitterImage: SEOOpenGraphImage;
    twitterTitle: string;
  }
  
  export interface SEOImageSize {
    width: number;
    height: number;
    sourceUrl: string;
  }
  
  export interface SEOMediaDetails {
    sizes: SEOImageSize[];
  }
  
  export interface SEOOpenGraphImage {
    mediaDetails: SEOMediaDetails;
  }
  
  export type Post = {
    title: string;
    slug: string;
    date: string;
    featuredImage?: {
      node?: {
        mediaDetails?: {
          file?: string;
          sizes?: { sourceUrl: string; width: number; height: number }[];
        };
      };
    };
    categories?: { nodes: { name: string; slug: string }[] };
  };
  
  export type PostsPayload = { nodes: Post[]; pageInfo: PageInfo };