interface MenuItem {
  children?: Array<MenuItem>;
  name: string;
  route: string;
}

interface SidebarMenu {
  children?: Array<SidebarMenu>;
  name: string;
  icon?: string;
  routeName: string;
  shortName?: string;
  hide?: boolean;
}

export type { MenuItem, SidebarMenu };
