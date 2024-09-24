import { Link, Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div
      className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div
        className="relative bg-auth-intro dark:bg-auth-intro-2 bg-cover hidden h-full flex-col bg-muted p-10 text-white  lg:flex">
        <Link to="/" className="relative z-20 w-[100px] flex items-center text-lg font-medium cursor-pointer">
          <img src='/logo-removebg.png' />
        </Link>
        <div className="-m-10  mt-auto  bg-gradient-to-t from-black/80 to-transparent">
          <div className="relative p-10 ">
            <blockquote className="space-y-2">
              <p className="text-lg text-white">
                &ldquo;Ứng dụng quản lý kho và sản phẩm cho mèo. Đây là bản chưa được
                thương mại hóa được phát triển bởi
                <small className='ml-2 text-lg'>
                  <Link
                    to="https://github.com/haidaqn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4"
                  >
                    @haidaqn
                  </Link></small>&rdquo;
              </p>
              <footer className="text-sm">Pawtopia</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="lg:p-8 relative">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Đăng nhập</h1>
            <p className="text-sm text-muted-foreground">
              Nhập email hoặc tên đăng nhập để tiếp tục
            </p>
          </div>
          <Outlet />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Bằng cách nhấp vào tiếp tục, bạn đồng ý với chúng tôi{' '}
            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
              Điều khoản dịch vụ
            </Link>{' '}
            và{' '}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
              Chính sách bảo mật
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}