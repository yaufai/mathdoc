from distutils.core import setup
import os

build_directory = "./build"

dependencies = []
classifiers  = [
    "Programming Language :: Python :: 3",
    "Programming Language :: JavaScript",
    "Operating System :: POSIX"
]


js_files = [ f for f in os.listdir(build_directory) if os.path.isfile(os.path.join(build_directory, f))]

setup(
    name="mathdoc",
    version="0.0.0",
    description="A markdown extension for mathematical documents.",
    long_description="A markdown extension for mathematical documents.",
    author="Hara Yuki",
    author_email="youhui.dev@gmail.com",
    install_requires=dependencies,
    packages=["mathdocpy"]
)