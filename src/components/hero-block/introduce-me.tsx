export const IntroduceMeBlock = () => {
  return (
    <div className="p-8 grid sm:grid-cols-4 lg:grid-cols-2 gap-4 h-dvh border-b-2">
      <div className="sm:col-span-3 lg:col-span-1 w-full flex flex-col items-center justify-center gap-1 md:gap-4 prose dark:prose-invert md:prose-lg lg:prose-xl text-center">
        <div>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary-500 pr-1">
            {"My name is ..."}
          </h1>
        </div>
        <div className="animate-fade-in">
          <p>
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex assumenda quasi harum, minima, esse culpa ea eos recusandae pariatur itaque dolorum error commodi illo, temporibus aperiam soluta animi possimus?`}
          </p>
        </div>
        <div className="hidden lg:block h-72 w-full relative group">
          
        </div>
      </div>
      <div className="w-4/6 h-5/6 relative group hidden lg:block">
        
      </div>
    </div>
  );
};
