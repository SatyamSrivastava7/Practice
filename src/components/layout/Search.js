import { useHistory } from "react-router-dom";

function Search() {
  const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
      history.push(`?s=${searchQuery}`);
      e.preventDefault();
    };

    return (
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit} />
    );
  };
}
