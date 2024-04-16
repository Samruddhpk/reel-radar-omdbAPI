import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <main className="w-full">
        <section className="w-[90vw] max-w-[1170px] text-white  mx-auto">
          <Outlet />
        </section>
      </main>
      <footer className=" p-4 text-center text-white  mt-8">
        <p className="font-semibold">Developed by &copy; Samruddh PK </p>
      </footer>
    </>
  );
};

export default HomeLayout;
