/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSONObject";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSONObject";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  JSONObject: any
}

export interface NexusGenObjects {
  Document: { // root type
    content?: NexusGenScalars['JSONObject'] | null; // JSONObject
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    descriptor?: string | null; // String
    id?: string | null; // String
    title?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Link: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    title?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    url?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    role?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Document: { // field return type
    content: NexusGenScalars['JSONObject'] | null; // JSONObject
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    creator: NexusGenRootTypes['User'] | null; // User
    descriptor: string | null; // String
    id: string | null; // String
    title: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
  Link: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    title: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    url: string | null; // String
  }
  Mutation: { // field return type
    newCheckout: string | null; // String
    newDocument: NexusGenRootTypes['Document'] | null; // Document
    registerUser: string; // String!
    updateDocument: NexusGenRootTypes['Document'] | null; // Document
  }
  Query: { // field return type
    authenticate: string | null; // String
    document: NexusGenRootTypes['Document'] | null; // Document
    myDocuments: Array<NexusGenRootTypes['Document'] | null> | null; // [Document]
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    documents: Array<NexusGenRootTypes['Document'] | null> | null; // [Document]
    email: string | null; // String
    role: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
  }
}

export interface NexusGenFieldTypeNames {
  Document: { // field return type name
    content: 'JSONObject'
    createdAt: 'DateTime'
    creator: 'User'
    descriptor: 'String'
    id: 'String'
    title: 'String'
    updatedAt: 'DateTime'
  }
  Link: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    title: 'String'
    updatedAt: 'DateTime'
    url: 'String'
  }
  Mutation: { // field return type name
    newCheckout: 'String'
    newDocument: 'Document'
    registerUser: 'String'
    updateDocument: 'Document'
  }
  Query: { // field return type name
    authenticate: 'String'
    document: 'Document'
    myDocuments: 'Document'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    documents: 'Document'
    email: 'String'
    role: 'String'
    updatedAt: 'DateTime'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    newCheckout: { // args
      frequency: string; // String!
    }
    updateDocument: { // args
      content?: string | null; // String
      descriptor?: string | null; // String
      documentId: string; // String!
      title?: string | null; // String
    }
  }
  Query: {
    document: { // args
      documentId: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}