const NAVIGATION_ITEMS = [
  {
    name: 'dashboard',
    label: 'Dashboard',
  },
  {
    name: 'settings',
    label: 'Settings',
  },
  {
    name: 'profile',
    label: 'Profile',
  },
];

type SidebarItem = {
  name: string;
  label: string;
};

type SidebarItemProps = {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const SidebarItem = ({ isActive, onClick, children }: SidebarItemProps) => {
  return (
    <div
      className={
        'flex py-1 px-2 rounded-sm' +
        (isActive ? ' bg-gray-400' : ' hover:bg-gray-300 cursor-pointer')
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Sidebar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (name: string) => void;
}) => {
  return (
    <div className="flex w-52 shrink-0 flex-col">
      <div className="flex h-full w-52 flex-col gap-y-1 rounded-lg bg-gray-200 py-8">
        {NAVIGATION_ITEMS.map((item) => (
          <SidebarItem
            key={item.name}
            isActive={activeTab === item.name}
            onClick={() => setActiveTab(item.name)}
          >
            {item.label}
          </SidebarItem>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
