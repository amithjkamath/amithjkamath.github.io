---
layout: page
title: Image Registration
description: an interactive overview of affine transformations
img: assets/img/image-registration-demo.png
importance: 2
category: teaching
---

Image registration is one of the first steps in any medical image analysis task, where iamges from various subjects are aligned together to either a common atlas, or to one another for better performance of subsequent steps. Often, it is not clear how the free parameters available in the registration process impacts the image itself. 

[Here](https://github.com/amithjkamath/image-registration) is a simple UI that allows you to modify each element of the affine transformation matrix, and observe how the image is deformed due to this change. This is meant to provide a practical understanding of these choices, for example, how rotation and translation are governed by separate parameters. 

See [Here](https://github.com/amithjkamath/image-registration) for the repository and the code that makes this possible.

