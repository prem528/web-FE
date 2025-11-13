export default function glowingBlur() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-60
        bg-linear-to-b from-transparent via-[#203583]/99 to-[#000000]  backdrop"
      />
    </>
  );
}
