// Data interface for update logs
export interface UpdateLog {
  // Update description
  description: string
  // Release time of the update
  time: number
  // Update sorting ID
  upid: number
  // Version of the update
  version: string
}
