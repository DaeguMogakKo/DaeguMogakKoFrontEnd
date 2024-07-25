export default function Partition({ description }: { description?: string }) {
  return (
    <div className="border-t relative border-gray-400">
      {description && (
        <h1 className="text-sm text-gray-400 absolute top-[-10px] bg-white dark:bg-gray-900 right-1/2 translate-x-1/2 whitespace-nowrap px-2">
          {description}
        </h1>
      )}
    </div>
  );
}
