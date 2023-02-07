import {RouteProps} from "react-router";
import {HomePage} from "pages/HomePage";
import {DiscoverPage} from "pages/DiscoverPage";

export enum AppRoutes {
    HOME = 'home',
    DISCOVER = 'discover'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.DISCOVER]: '/discover'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>
    }, [AppRoutes.DISCOVER]: {
        path: RoutePath.discover,
        element: <DiscoverPage/>
    },
}
