export const validate = {
  /**
   * 이메일 유효성 검사
   * @param {string} email
   * @returns {boolean}
   */
  email(email) {
    return email.includes("@");
  },

  /**
   * 비밀번호 유효성 검사
   * @param {string} password
   * @returns {boolean}
   */

  password(password) {
    return password.length >= 8;
  },
};
