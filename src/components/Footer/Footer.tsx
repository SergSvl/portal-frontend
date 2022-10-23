export const Footer = () => {
  const getToday = () => new Date().getFullYear();

  return (
    <div className='container mx-auto mb-0 py-2 text-center'>
      Балтийский Алмаз &copy;&nbsp;2016&nbsp;-&nbsp;{getToday()}
    </div>
  );
}
