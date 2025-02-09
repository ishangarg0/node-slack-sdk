/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminTeamsListResponse = WebAPICallResult & {
  error?:             string;
  needed?:            string;
  ok?:                boolean;
  provided?:          string;
  response_metadata?: ResponseMetadata;
  teams?:             Team[];
};

export interface ResponseMetadata {
  next_cursor?: string;
}

export interface Team {
  discoverability?: string;
  id?:              string;
  name?:            string;
  primary_owner?:   PrimaryOwner;
  team_url?:        string;
}

export interface PrimaryOwner {
  email?:   string;
  user_id?: string;
}
