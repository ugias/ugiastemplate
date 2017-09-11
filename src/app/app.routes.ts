import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from  "./components/about";
import { ErrorComponent } from  "./components/error";

const appRoutes: Routes = [
    { path: "", redirectTo: "/registration", pathMatch: "full" },
    { path: "about", component: AboutComponent },
    { path: "error", component: ErrorComponent }
];

export const APPROUTING = RouterModule.forRoot(appRoutes, { useHash: true });

