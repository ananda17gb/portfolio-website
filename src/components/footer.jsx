function Header() {
  // contact (nomor hp, email), social media (instagram, linkedin, github, soundcloud)
  return (
    <>
      <div className="bg-[#354a5f] h-[20vh] flex justify-between items-center px-[420px]">
        <div className="flex flex-row gap-2 py-4">
          <h1 className="text-xl font-semibold">Contact me here:</h1>
          <div className="flex flex-col gap-2 py-1">
            <p className="font-semibold">+6281222693760</p>
            <p className="font-semibold">ananda.widigdo17@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
