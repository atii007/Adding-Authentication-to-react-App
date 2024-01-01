import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import EventsPage, { loader as eventLoader } from "./components/Pages/Events";
import EventDetailPage, {
  action as deleteAction,
  loader as eventDetailLoader,
} from "./components/Pages/EventDetails";
import NewEventPage, {
  action as newEventAction,
} from "./components/Pages/NewEvent";
import EditEventPage from "./components/Pages/EditEvent";
import Layout from "./components/Pages/Root";
import EventsRootLayout from "./components/Pages/EventsRoot";
import ErrorPage from "./components/Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
