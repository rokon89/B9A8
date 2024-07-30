import toast from 'react-hot-toast';

const GetbookApplication = () => {
    const bookApplication = localStorage.getItem("book")
    if (bookApplication) {
        return JSON.parse(bookApplication);
    }
    return [];
}

const saveApplication = id => {
    const bookApplications = GetbookApplication();
    const exists = bookApplications.find(bookid => bookid === id)
    if (!exists) {
        bookApplications.push(id)
        localStorage.setItem("book", JSON.stringify(bookApplications))
        toast.success('Bookmark Successfully !')
    } else {
        toast.error("Book Already Added")
    }

}

export { saveApplication, GetbookApplication };