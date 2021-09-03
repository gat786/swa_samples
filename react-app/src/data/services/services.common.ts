import axios from "axios";
import { constants } from "../../config";
import querystring from "querystring";

export const api = constants.endpoint;

export const getHeaders = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${localStorage.getItem(constants.KEY_AUTH_TOKEN)}`,
  };
};

export const getPaginationParams = ({ pagenumber = 0, pagesize = 20 }) => {
  return querystring.stringify({
    pagenumber: pagenumber + 1,
    pagesize: pagesize,
  });
};

const stringifyParams = (params = {}) => {
  return querystring.stringify(params);
};

export const error = (e: any) => {
  return { status: "error", isSuccessful: false, message: e, data: null };
};

export const success = (data: any) => {
  return { status: "success", isSuccessful: true, data: data, message: null };
};

type GetRequestDetails = {
  url: string;
  headers?: any;
  params?: any;
};

export const get = async (
  requestDetails: GetRequestDetails = { url: "", params: {}, headers: {} }
) => {
  try {
    const stringParams = stringifyParams(requestDetails.params);
    const response = await axios.get(`${requestDetails.url}?${stringParams}`, {
      ...requestDetails.headers,
    });
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type PostRequestDetails = {
  url: string;
  params?: any;
  headers?: any;
  data?: any;
};

export const post = async (
  requestDetails: PostRequestDetails = {
    url: "",
    params: {},
    headers: {},
    data: {},
  }
) => {
  try {
    const stringParams = stringifyParams(requestDetails.params);
    const response = await axios.post(
      `${requestDetails.url}?${stringParams}`,
      requestDetails.data,
      {
        ...requestDetails.headers,
      }
    );
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type DownloadRequestDetails = {
  url: string;
  params?: any;
  data?: any;
  headers?: any;
};

export const download = async (
  requestDetails: DownloadRequestDetails = {
    url: "",
    params: {},
    data: {},
    headers: {},
  }
) => {
  try {
    const stringParams = stringifyParams(requestDetails.params);
    const response = await axios.post(
      `${requestDetails.url}?${stringParams}`,
      requestDetails.data,
      {
        ...requestDetails.headers,
        responseType: "blob",
      }
    );
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type UpdateRequestDetails = {
  url: string;
  params?: any;
  data?: any;
  headers?: any;
};

export const update = async (
  requestDetails: UpdateRequestDetails = {
    url: "",
    params: {},
    data: {},
    headers: {},
  }
) => {
  try {
    const stringParams = stringifyParams(requestDetails.params);
    const response = await axios.put(
      requestDetails.url + `?${stringParams}`,
      requestDetails.data,
      { ...requestDetails.headers }
    );
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};

type DeleteRequestDetails = {
  url: string;
  params?: any;
  headers?: any;
};

export const del = async (
  requestDetails: DeleteRequestDetails = {
    url: "",
    params: {},
    headers: {},
  }
) => {
  try {
    const stringParams = stringifyParams(requestDetails.params);
    const response = await axios.delete(
      requestDetails.url + `?${stringParams}`,
      { ...requestDetails.headers }
    );
    return success(response.data);
  } catch (e) {
    console.log(e);
    return error(e);
  }
};
