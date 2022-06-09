import Skeleton from "./Skeleton";


const SkeletonMainRepo: React.FC = () => {
  return (
      <div className="bg-brand-500 rounded-2xl p-8 drop-shadow-lg">
        <header className="flex flex-row items-center gap-3 text-brand-300">
          <Skeleton width='50%' height={18} />
        </header>

        <main className="mt-4">
          <p className="text-brand-300 text-sm">
            <Skeleton width='100%' height={12} />
          </p>
        </main>

        <footer className="flex flex-row items-center justify-between mt-10">
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2 text-brand-300">
              <span className="text-sm">
                <Skeleton width='25px' height={12} />
              </span>
            </div>

            <div className="flex flex-row items-center gap-2 text-brand-300">
              <span className="text-sm">
                <Skeleton width='25px' height={12} />
              </span>
            </div>
          </div> 

          <div className="flex flex-row items-center gap-2">
            <Skeleton width='15px' height={15} fullRounded />
            <span className="text-sm text-brand-300">
              <Skeleton width='60px' height={15} />
            </span>
          </div>
        </footer>
      </div>
  );
}

export default SkeletonMainRepo;