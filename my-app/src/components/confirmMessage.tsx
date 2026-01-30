export default function ConfirmMessage({ Shown, onConfirm, onCancel }: { Shown: boolean, onConfirm: () => void, onCancel: () => void }) {
    if (!Shown) return null;
    return (
        <div className={`${Shown ? "z-50 inset-0 bg-black/90 fixed flex items-center justify-center" : "hidden"}`}>
            <div className="bg-background dark:bg-dark-background p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-4 text-on-background dark:text-dark-on-background">Are you sure you want to submit the quiz?</p>
                <div className="flex justify-end gap-2">
                    <button className="cursor-pointer px-4 py-2 bg-primary text-on-primary dark:bg-dark-primary dark:text-dark-on-primary rounded-md hover:bg-primary-container hover:text-on-primary-container dark:hover:bg-dark-primary-container dark:hover:text-dark-on-primary-container transition-colors" onClick={onConfirm}>Yes</button>
                    <button className="cursor-pointer px-4 py-2 bg-error text-on-error dark:bg-dark-error dark:text-dark-on-error rounded-md hover:bg-error-container hover:text-on-error-container dark:hover:bg-dark-error-container dark:hover:text-dark-on-error-container transition-colors" onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    )
}