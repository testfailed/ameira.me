export default function Hamburger({ onClick }) {
  let hamburger = [];
  for (let i = 0; i < 3; i++) {
    hamburger.push(
      <span key={`hamburger-${i}`} className="bg-pink-custom w-8 h-1 my-1" />
    )
  }
  return (
    <div onClick={onClick} className="fixed md:hidden z-50 h-14 w-14 top-0 right-0 m-4 bg-opacity-nav bg-white flex flex-col justify-center items-center">
      {hamburger}
    </div>
  )
}
