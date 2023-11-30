function Logo({ size }) {
    return (
        <div className="flex justify-center content-center">
            <img
                width={size ? size : 200}
                alt="WUTrade logo"
                src="/wutrade-logo.png"
            ></img>
        </div>
    );
}

export default Logo;
