export default function authheader() {
  if (user && user.accesstoken) {
    return { "x-access-token": user.accessToken };
  } else {
    return;
  }
}
