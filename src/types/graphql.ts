export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};

export type AddCategoryInput = {
  name: Scalars['String'];
  posts?: Maybe<Array<PostRef>>;
};

export type AddCategoryPayload = {
  __typename?: 'AddCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};

export type AddCommentInput = {
  author: UserRef;
  commentsOn: PostRef;
  text: Scalars['String'];
};

export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

export type AddPostInput = {
  author: UserRef;
  category: CategoryRef;
  comments?: Maybe<Array<CommentRef>>;
  datePublished?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type AddPostPayload = {
  __typename?: 'AddPostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type AddPostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};

export type AddUserInput = {
  avatarImg?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<CommentRef>>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  username: Scalars['String'];
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  rule?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  postsAggregate?: Maybe<PostAggregateResult>;
};


export type CategoryPostsArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};


export type CategoryPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};

export type CategoryAggregateResult = {
  __typename?: 'CategoryAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
};

export type CategoryFilter = {
  and?: Maybe<Array<Maybe<CategoryFilter>>>;
  has?: Maybe<Array<Maybe<CategoryHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<StringTermFilter>;
  not?: Maybe<CategoryFilter>;
  or?: Maybe<Array<Maybe<CategoryFilter>>>;
};

export enum CategoryHasFilter {
  Name = 'name',
  Posts = 'posts'
}

export type CategoryOrder = {
  asc?: Maybe<CategoryOrderable>;
  desc?: Maybe<CategoryOrderable>;
  then?: Maybe<CategoryOrder>;
};

export enum CategoryOrderable {
  Name = 'name'
}

export type CategoryPatch = {
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
};

export type CategoryRef = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  commentsOn: Post;
  id: Scalars['ID'];
  text: Scalars['String'];
};


export type CommentAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type CommentCommentsOnArgs = {
  filter?: Maybe<PostFilter>;
};

export type CommentAggregateResult = {
  __typename?: 'CommentAggregateResult';
  count?: Maybe<Scalars['Int']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  and?: Maybe<Array<Maybe<CommentFilter>>>;
  has?: Maybe<Array<Maybe<CommentHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<CommentFilter>;
  or?: Maybe<Array<Maybe<CommentFilter>>>;
};

export enum CommentHasFilter {
  Author = 'author',
  CommentsOn = 'commentsOn',
  Text = 'text'
}

export type CommentOrder = {
  asc?: Maybe<CommentOrderable>;
  desc?: Maybe<CommentOrderable>;
  then?: Maybe<CommentOrder>;
};

export enum CommentOrderable {
  Text = 'text'
}

export type CommentPatch = {
  author?: Maybe<UserRef>;
  commentsOn?: Maybe<PostRef>;
  text?: Maybe<Scalars['String']>;
};

export type CommentRef = {
  author?: Maybe<UserRef>;
  commentsOn?: Maybe<PostRef>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type CustomHttp = {
  body?: Maybe<Scalars['String']>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  graphql?: Maybe<Scalars['String']>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  method: HttpMethod;
  mode?: Maybe<Mode>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
  url: Scalars['String'];
};

export type DateTimeFilter = {
  between?: Maybe<DateTimeRange>;
  eq?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type DeletePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type FloatFilter = {
  between?: Maybe<FloatRange>;
  eq?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
};

export type FloatRange = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type GenerateQueryParams = {
  aggregate?: Maybe<Scalars['Boolean']>;
  get?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: Maybe<Int64Range>;
  eq?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  in?: Maybe<Array<Maybe<Scalars['Int64']>>>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
};

export type Int64Range = {
  max: Scalars['Int64'];
  min: Scalars['Int64'];
};

export type IntersectsFilter = {
  multiPolygon?: Maybe<MultiPolygonRef>;
  polygon?: Maybe<PolygonRef>;
};

export type IntFilter = {
  between?: Maybe<IntRange>;
  eq?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
};

export type IntRange = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory?: Maybe<AddCategoryPayload>;
  addComment?: Maybe<AddCommentPayload>;
  addPost?: Maybe<AddPostPayload>;
  addUser?: Maybe<AddUserPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deletePost?: Maybe<DeletePostPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddCategoryArgs = {
  input: Array<AddCategoryInput>;
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};


export type MutationAddPostArgs = {
  input: Array<AddPostInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
  upsert?: Maybe<Scalars['Boolean']>;
};


export type MutationDeleteCategoryArgs = {
  filter: CategoryFilter;
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter;
};


export type MutationDeletePostArgs = {
  filter: PostFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  category: Category;
  comments?: Maybe<Array<Comment>>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  datePublished?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  tags?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
};


export type PostAuthorArgs = {
  filter?: Maybe<UserFilter>;
};


export type PostCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type PostCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};


export type PostCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};

export type PostAggregateResult = {
  __typename?: 'PostAggregateResult';
  count?: Maybe<Scalars['Int']>;
  datePublishedMax?: Maybe<Scalars['DateTime']>;
  datePublishedMin?: Maybe<Scalars['DateTime']>;
  tagsMax?: Maybe<Scalars['String']>;
  tagsMin?: Maybe<Scalars['String']>;
  textMax?: Maybe<Scalars['String']>;
  textMin?: Maybe<Scalars['String']>;
  titleMax?: Maybe<Scalars['String']>;
  titleMin?: Maybe<Scalars['String']>;
};

export type PostFilter = {
  and?: Maybe<Array<Maybe<PostFilter>>>;
  has?: Maybe<Array<Maybe<PostHasFilter>>>;
  id?: Maybe<Array<Scalars['ID']>>;
  not?: Maybe<PostFilter>;
  or?: Maybe<Array<Maybe<PostFilter>>>;
  tags?: Maybe<StringTermFilter>;
  text?: Maybe<StringFullTextFilter>;
  title?: Maybe<StringTermFilter>;
};

export enum PostHasFilter {
  Author = 'author',
  Category = 'category',
  Comments = 'comments',
  DatePublished = 'datePublished',
  Tags = 'tags',
  Text = 'text',
  Title = 'title'
}

export type PostOrder = {
  asc?: Maybe<PostOrderable>;
  desc?: Maybe<PostOrderable>;
  then?: Maybe<PostOrder>;
};

export enum PostOrderable {
  DatePublished = 'datePublished',
  Tags = 'tags',
  Text = 'text',
  Title = 'title'
}

export type PostPatch = {
  author?: Maybe<UserRef>;
  category?: Maybe<CategoryRef>;
  comments?: Maybe<Array<CommentRef>>;
  datePublished?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostRef = {
  author?: Maybe<UserRef>;
  category?: Maybe<CategoryRef>;
  comments?: Maybe<Array<CommentRef>>;
  datePublished?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  tags?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory?: Maybe<CategoryAggregateResult>;
  aggregateComment?: Maybe<CommentAggregateResult>;
  aggregatePost?: Maybe<PostAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getCategory?: Maybe<Category>;
  getComment?: Maybe<Comment>;
  getPost?: Maybe<Post>;
  getUser?: Maybe<User>;
  queryCategory?: Maybe<Array<Maybe<Category>>>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
  queryPost?: Maybe<Array<Maybe<Post>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryAggregateCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type QueryAggregateCommentArgs = {
  filter?: Maybe<CommentFilter>;
};


export type QueryAggregatePostArgs = {
  filter?: Maybe<PostFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};


export type QueryQueryCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};


export type QueryQueryCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};


export type QueryQueryPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

export type StringExactFilter = {
  between?: Maybe<StringRange>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StringRange = {
  max: Scalars['String'];
  min: Scalars['String'];
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  filter: CategoryFilter;
  remove?: Maybe<CategoryPatch>;
  set?: Maybe<CategoryPatch>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  category?: Maybe<Array<Maybe<Category>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCategoryPayloadCategoryArgs = {
  filter?: Maybe<CategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CategoryOrder>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  remove?: Maybe<CommentPatch>;
  set?: Maybe<CommentPatch>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};

export type UpdatePostInput = {
  filter: PostFilter;
  remove?: Maybe<PostPatch>;
  set?: Maybe<PostPatch>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  numUids?: Maybe<Scalars['Int']>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type UpdatePostPayloadPostArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: Maybe<UserPatch>;
  set?: Maybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  numUids?: Maybe<Scalars['Int']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<UserOrder>;
};

export type User = {
  __typename?: 'User';
  avatarImg?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  postsAggregate?: Maybe<PostAggregateResult>;
  username: Scalars['String'];
};


export type UserCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<CommentOrder>;
};


export type UserCommentsAggregateArgs = {
  filter?: Maybe<CommentFilter>;
};


export type UserPostsArgs = {
  filter?: Maybe<PostFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<PostOrder>;
};


export type UserPostsAggregateArgs = {
  filter?: Maybe<PostFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  avatarImgMax?: Maybe<Scalars['String']>;
  avatarImgMin?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  displayNameMax?: Maybe<Scalars['String']>;
  displayNameMin?: Maybe<Scalars['String']>;
  usernameMax?: Maybe<Scalars['String']>;
  usernameMin?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  and?: Maybe<Array<Maybe<UserFilter>>>;
  has?: Maybe<Array<Maybe<UserHasFilter>>>;
  not?: Maybe<UserFilter>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  username?: Maybe<StringHashFilter>;
};

export enum UserHasFilter {
  AvatarImg = 'avatarImg',
  Comments = 'comments',
  DisplayName = 'displayName',
  Posts = 'posts',
  Username = 'username'
}

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export enum UserOrderable {
  AvatarImg = 'avatarImg',
  DisplayName = 'displayName',
  Username = 'username'
}

export type UserPatch = {
  avatarImg?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<CommentRef>>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
};

export type UserRef = {
  avatarImg?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<CommentRef>>;
  displayName?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<PostRef>>;
  username?: Maybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};
