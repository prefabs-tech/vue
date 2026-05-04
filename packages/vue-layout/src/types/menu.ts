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
  hide?: boolean;
  icon?: string;
  name: string;
  routeName: string;
  shortName?: string;
}

export type { MenuItem, SidebarMenu };
