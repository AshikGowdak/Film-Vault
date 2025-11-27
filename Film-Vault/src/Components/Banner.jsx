import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-center bg-cover  `bg-[length:100%_100%]` flex items-end"
      style={{
        backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a364ee04-6380-4393-a551-2199250f57bf/dbtspza-04318586-4f6e-4363-b1b9-b9f285b1d475.jpg/v1/fill/w_1024,h_626,q_75,strp/the_avengers___wallpaper_by_daviddv1202_dbtspza-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI2IiwicGF0aCI6Ii9mL2EzNjRlZTA0LTYzODAtNDM5My1hNTUxLTIxOTkyNTBmNTdiZi9kYnRzcHphLTA0MzE4NTg2LTRmNmUtNDM2My1iMWI5LWI5ZjI4NWIxZDQ3NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CoPKTcBRFaXrIrArGUGdKyHKZtRp7ihAynZcmkJ0yEA)`,
      }}
    >
      <div className="text-xl bg-gray-900/60 text-white text-center w-full p-4">
        Avengers
      </div>
    </div>
  );
}

export default Banner;
