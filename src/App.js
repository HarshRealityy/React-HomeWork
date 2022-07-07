import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import AlbumsPage from "./components/AlbumsPage";
import CommentsPage from "./components/CommentsPage";
import TodosPage from "./components/TodosPage";
import CommentPage from "./components/CommentPage";


export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/comments">Comments</Link>
                        </li>
                        <li>
                            <Link to="/albums">Albums</Link>
                        </li>
                        <li>

                            <Link to="/todos">Todos</Link>
                        </li>
                        <li>

                            <Link to="/does-not-exist">Catch all route</Link>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="albums" element={<AlbumsPage/>}/>
                    <Route path="todos" element={<TodosPage/>}/>
                    <Route exact path="comments" element={<CommentsPage/>}/>
                    <Route exact path="comments/:comment_id" element={<CommentPage/>}/>


                    <Route
                        path="*"
                        element={
                            <div>
                                <h2>404 Page not found etc</h2>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}


