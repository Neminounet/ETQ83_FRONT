import { createBrowserRouter, redirect } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
import rootLoader from "./loaders/rootLoader";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminRoute from "./components/AdminRoute/AdminRoute";

import { getRDV } from "./apis/rdv";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))
const Inscription = lazy(()=> import("./pages/Inscription/Inscription"));
const Connexion = lazy(()=> import("./pages/Connexion/Connexion"));
const Workspace = lazy(()=> import("./pages/Workspace/Workspace"));
const ProfileManager = lazy(()=> import("./pages/Workspace/pages/ProfileManager/ProfileManager"))
const Availability = lazy(()=> import("./pages/Workspace/pages/Availability/Availability"));
const RendezVous = lazy(()=> import("./pages/Workspace/pages/RendezVous/RendezVous"));
const RendezVousDetail = lazy(()=> import("./pages/Workspace/pages/RendezVousDetail/RendezVousDetail"));
const RGPD = lazy(()=> import("./pages/RGPD/RGPD"));
const UsersManager = lazy(()=> import("./pages/Workspace/pages/UsersManager/UsersManager"));


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        loader: rootLoader,
        children: [
            {
                index: true,
                element: <Homepage/>,
            },
            {
                path:"rgpd",
                element: <RGPD/>
            },
            {
                path: "inscription",
                element: <Inscription/>,
            },
            {
                path: "connexion",
                element: <Connexion/>
            },
            {
                path: "workspace",
                element: <ProtectedRoute><Workspace/></ProtectedRoute>,
                children: [
                    {
                        index:true,
                        loader: async () => redirect("rendezvous"),
                    },
                    {
                        path: "profile",
                        element: <ProfileManager/>
                    },
                    {
                        path: "rendezvous",
                        element: <RendezVous/>,  
                    },
                    {
                        path: "availability",
                        element: <AdminRoute><Availability/></AdminRoute>
                    },
                    {
                        path: "usersmanager",
                        element: <AdminRoute><UsersManager/></AdminRoute>
                    },
                    {
                        path: "rendezvous/:id",
                        loader: async ({ params: { id } }) => getRDV(id),
                        element: <RendezVousDetail/>
                    }
                ]
            }
        ]
    }
])

export { router };