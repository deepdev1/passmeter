export interface ApiRequest {
  password: string;
}


/* Model for ApiResponse */
export interface ApiResponse {
  password:            string;
  guesses:             number;
  guesses_log10:       number;
  sequence:            Sequence[];
  calc_time:           number;
  crack_times_seconds: CrackTimesSeconds;
  crack_times_display: CrackTimesDisplay;
  score:               number;
  feedback:            Feedback;
}

export interface CrackTimesDisplay {
  online_throttling_100_per_hour:       string;
  online_no_throttling_10_per_second:   string;
  offline_slow_hashing_1e4_per_second:  string;
  offline_fast_hashing_1e10_per_second: string;
}

export interface CrackTimesSeconds {
  online_throttling_100_per_hour:       number;
  online_no_throttling_10_per_second:   number;
  offline_slow_hashing_1e4_per_second:  number;
  offline_fast_hashing_1e10_per_second: number;
}

export interface Feedback {
  warning:     string;
  suggestions: any[];
}

export interface Sequence {
  pattern:       string;
  token:         string;
  i:             number;
  j:             number;
  guesses:       number;
  guesses_log10: number;
}