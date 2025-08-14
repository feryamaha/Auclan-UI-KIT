// src/components/ui/Button/SectionButton.tsx

import { Icon } from "@/scripts/Icon";

export function Avatar() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col items-start mt-16 ml-32 gap-2">
      <div className="w-max flex flex-col items-center gap-8 p-8 outline-2 outline-dashed outline-violet-500 rounded-lg ">
        <Icon name="IconAvatar" />
        <Icon name="IconAvatarMD" />
        <Icon name="IconAvatarSM" />
      </div>
    </div>
  );
}
