export interface IMood {
  id: number
  user_id: string
  date: string
  rate: number
}

export interface IUser {
  breath: boolean
  email: string
  gdpr: boolean
  id: string
  mood_picker: boolean
  name: string
  tabs_count: number
  mood: IMood | null
  picture: string | null
}

export interface IDeleteFeedback {
  reason: string
  comment: string
}

export interface IReferrer {
  referrer: string
  entry_url: string
}
