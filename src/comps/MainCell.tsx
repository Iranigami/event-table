import type { Cell } from "../types";

type Props = {
  onOpen: (id: number) => void;
  data: Cell;
};

const MainCell = ({ data, onOpen }: Props) => {
  return (
    <div
      onClick={() => onOpen(data.id)}
      className={`w-[358px] mb-[8px] duration-200 active:min-h-full active:bg-[#004662B2] active:text-white min-h-[74px] max-h-[212px] rounded-[24px] bg-[#FFFFFFB2] p-[12px] flex gap-[8px] ${!!data.media ? "justify-left text-[16px]" : "justify-center text-[20px]"} items-center text-accent font-semibold`}
    >
      {data.media && (
        <div
          className={`${data.isTitleHidden ? "w-[334px] h-[188px] relative" : "size-[121px]"} rounded-[12px] overflow-hidden`}
        >
          <img
            src={data.media[0].url}
            alt="media"
            className={`object-cover w-full h-full ${data.isTitleHidden && "blur-[26px] absolute"}`}
          />
          <div
            hidden={!data.isTitleHidden}
            className="bg-[#00000066] w-[334px] h-[188px] absolute"
          />
          <img
            hidden={!data.isTitleHidden}
            src={data.media[0].url}
            alt="media"
            className="object-fit h-full mx-auto left-0 right-0 absolute"
          />
        </div>
      )}
      <div className="text-center">
        {!data.isTitleHidden && data.title}
        <div className="text-[24px]">
          {data.type === "timeline" && data.value}
        </div>
      </div>
    </div>
  );
};

export default MainCell;
