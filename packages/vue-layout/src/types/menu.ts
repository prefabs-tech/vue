interface MenuItem {
  children?: Array<MenuItem>;
  hide?: boolean;
  icon?: string;
  name: string;
  route: string;
  shortName?: string;
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
