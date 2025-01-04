import Image from 'next/image';

export const metadata = {
  title: 'News Grid',
};

const fetchNewsItems = async () => {
  // Simulating server-side fetching
  return [
    {
      id: 1,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog1-450x580.jpg.png?updatedAt=1735918305495",
      size: "large",
    },
    {
      id: 2,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog1-450x580.jpg.png?updatedAt=1735918305495",
      size: "small",
    },
    {
      id: 3,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2023 Is Back",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog1-450x580.jpg.png?updatedAt=1735918305495",
      size: "large",
    },
    {
      id: 4,
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog1-450x580.jpg.png?updatedAt=1735918305495",
      size: "small",
    },
    {
      id: 5,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2023 Is Back",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog2-450x580.jpg.png?updatedAt=1735918305360",
      size: "large",
    },
    {
      id: 6,
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog2-450x580.jpg.png?updatedAt=1735918305360",
      size: "large",
    },
    {
      id: 7,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2023 Is Back",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog2-450x580.jpg.png?updatedAt=1735918305360",
      size: "small",
    },
    {
      id: 8,
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
      image: "https://ik.imagekit.io/sm4doqwzz/Assets/blog2-450x580.jpg.png?updatedAt=1735918305360",
      size: "small",
    },
  ];
};

const NewsCardGrid = async () => {
  const newsItems = await fetchNewsItems();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {newsItems.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-2 ${
            item.size === "large" ? "row-span-2 h-96" : "h-44"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            priority={item.size === "large"}
          />
          <div className="absolute top-2  bg-[#003569] text-white text-xs font-bold px-5 py-1 rounded-r-full">
            {item.date}
          </div>
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
            <h3 className="text-sm font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCardGrid;
