const common = {
  validator: {
    invalid: "Dữ liệu không hơp lệ",
    required: "Yêu cầu nhập dữ liệu",
    password: "Mật khẩu không hợp lệ !",

    // yup string
    stringMin: "Dữ liệu phải có ít nhất {{min}} ký tự",
    stringMax: "Dữ liệu có tối đa {{max}} ký tự",
    stringMatches: 'Dữ liệu phải theo cấu trúc: "{{regex}}"',
    stringEmail: "Email không đúng định dạng",
    stringUrl: "Url không đúng định dạng",
    stringUuid: "UUID không đúng định dạng",
    stringTrim: "Chuỗi ký tự không được có khoảng trắng 2 đầu",
    stringLowercase: "Chuỗi ký tự phải viết thường",
    stringUppercase: "Chuỗi ký tự phải viết in",

    // yup number
    numberMin: "Số không được nhỏ hơn {{min}}",
    numberMax: "Số chỉ được nhỏ hơn hoặc bằng {{max}}",
    numberLessThan: "Field must be less than {{less}}",
    numberMoreThan: "Field must be greater than {{more}}",
    numberPositive: "Không được là số âm",
    numberNegative: "Không được là số dương",
    numberInteger: "Phải là kiểu số nguyên",
  },
};
export default common;
