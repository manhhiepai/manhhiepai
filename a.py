print("Chào mừng đến với Mạnh Hiệp AI!")
print("Vui lòng đăng kí để sử dụng dịch vụ của chúng tôi.")

# Tạo một dictionary để lưu trữ thông tin đăng kí
users = {}

while True:
    username = input("Tên đăng nhập: ")
    password = input("Mật khẩu: ")

    # Kiểm tra xem tên đăng nhập đã được sử dụng chưa
    if username in users:
        print("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.")
    else:
        # Lưu thông tin đăng kí vào dictionary
        users[username] = password
        print("Đăng kí thành công.")
        break

# Yêu cầu người dùng đăng nhập để sử dụng dịch vụ
while True:
    username = input("Tên đăng nhập: ")
    password = input("Mật khẩu: ")

    # Kiểm tra xem tên đăng nhập và mật khẩu có chính xác không
    if username in users and users[username] == password:
        print("Đăng nhập thành công.")
        print("Cảm ơn bạn đã sử dụng dịch vụ của Mạnh Hiệp AI và tuân thủ những quy tắc mà người lập trình đã đề ra.")

        # Hiển thị menu để người dùng chọn bản mod
        while True:
            print("Vui lòng chọn bản mod:")
            print("1. Bản mod PC")
            print("2. Bản mod Android")
            print("3. Bản mod iOS")

            choice = input("Lựa chọn của bạn: ")

            if choice == "1":
                print("Link tải bản mod PC: https://drive.google.com/file/d/158OdPAW73J1CMk0BmWl4En318sUqmYOP/view")
                break
            elif choice == "2":
                print("Link tải bản mod Android: https://www.mediafire.com/file/3onxxx2akmxfg1f/ModKoi230.apk/file")
                break
            elif choice == "3":
                print("Hiện tại dịch vụ chưa được hỗ trợ trên iOS. Xin lỗi vì sự bất tiện này mong bạn thông cảm cho người lập trình tức: Mạnh Hiệp AI.")
                break
            else:
                print("Lựa chọn không hợp lệ. Vui lòng chọn lại.")
        break
    else:
        print("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.")