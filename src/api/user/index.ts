import {
  fetchGet,
  fetchPut,
  fetchPost,
  fetchPostWithFormData,
} from '@/utils/request'
import objectToQueryParams from '@/utils/objectToQueryParams'
import * as User from './types/user'

// Get a single user's information
export async function getUserByUidApi(
  uid: number
): Promise<User.UserInfoResponseData> {
  const url = `/user/${uid}`
  const response = await fetchGet<User.UserInfoResponseData>(url)
  return response
}

// Update user avatar
export async function updateUserAvatarApi(
  request: User.UserUpdateAvatarRequestData
): Promise<User.UserUpdateAvatarResponseData> {
  const url = `/user/${request.uid}/avatar`
  const response =
    await fetchPostWithFormData<User.UserUpdateAvatarResponseData>(
      url,
      request.avatar
    )
  return response
}

// Update user bio (signature)
export async function updateUserBioApi(
  request: User.UserUpdateBioRequestData
): Promise<User.UserUpdateBioResponseData> {
  const url = `/user/${request.uid}/bio`
  const response = await fetchPut<User.UserUpdateBioResponseData>(url, request)
  return response
}

// Get user email
export async function getUserEmailApi(
  uid: number
): Promise<User.UserGetUserEmailResponseData> {
  const url = `/user/${uid}/email`
  const response = await fetchGet<User.UserGetUserEmailResponseData>(url)
  return response
}

// Send reset email code
export async function getUserResetEmailCodeApi(
  email: string
): Promise<User.UserGetEmailRestCodeResponseData> {
  const url = `/auth/email/reset`
  const postData = {
    email: email,
  }
  const response = await fetchPost<User.UserGetEmailRestCodeResponseData>(
    url,
    postData
  )
  return response
}

// Update email
export async function updateUserEmailApi(
  request: User.UserUpdateEmailRequestData
): Promise<User.UserUpdateEmailResponseData> {
  const url = `/user/${request.uid}/email`
  const response = fetchPut<User.UserUpdateEmailResponseData>(url, request)
  return response
}

// Update password
export async function updateUserPasswordApi(
  request: User.UserUpdatePasswordRequestData
): Promise<User.UserUpdatePasswordResponseData> {
  const url = `/user/${request.uid}/password`
  const response = fetchPut<User.UserUpdatePasswordResponseData>(url, request)
  return response
}

// Get user topics (published, liked, and upvoted)
export async function getUserTopicApi(
  request: User.UserGetUserTopicRequestData
): Promise<User.UserGetUserTopicResponseData> {
  const queryParams = objectToQueryParams(request, 'uid')
  const url = `/user/${request.uid}/topics?${queryParams}`
  const response = fetchGet<User.UserGetUserTopicResponseData>(url)
  return response
}

// Get user replies
export async function getUserReplyApi(
  request: User.UserGetUserReplyRequestData
): Promise<User.UserGetUserReplyResponseData> {
  const queryParams = objectToQueryParams(request, 'uid')
  const url = `/user/${request.uid}/replies?${queryParams}`
  const response = fetchGet<User.UserGetUserReplyResponseData>(url)
  return response
}

// Get user comments
export async function getUserCommentApi(
  request: User.UserGetUserCommentRequestData
): Promise<User.UserGetUserCommentResponseData> {
  const queryParams = objectToQueryParams(request, 'uid')
  const url = `/user/${request.uid}/comments?${queryParams}`
  const response = fetchGet<User.UserGetUserCommentResponseData>(url)
  return response
}

// Reset password by user email
export async function updateUserPasswordByEmailApi(
  request: User.UserResetPasswordByEmailRequestData
): Promise<User.UserResetPasswordByEmailResponseData> {
  const url = `/auth/password/reset`
  const response = fetchPost<User.UserResetPasswordByEmailResponseData>(
    url,
    request
  )
  return response
}
