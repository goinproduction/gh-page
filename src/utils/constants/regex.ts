export const checkUsernameRegex = /^[^0-9][a-zA-Z0-9_]{2,15}$/;
export const checkPhoneNumberRegex = /((^(\+84|0){1})(3|5|7|8|9))+([0-9]{8})$/;
export const checkPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
export const checkEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const checkUrlRegex = /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%/&=?.]+\.[a-z]{2,4}\/?([^\s<>#%",\\{}\\|\\^[\]`]+)?)/;
