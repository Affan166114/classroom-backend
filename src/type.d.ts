type Schedule = {
  day: string;
  startTime: string;
  endTime: string;
};

type UserRoles = "admin" | "teacher" | "student"; // it specify different user roles

type RateLimitRole = UserRoles | "guest"; // this tells that the rate limit role can be any of the UserRoles or guest